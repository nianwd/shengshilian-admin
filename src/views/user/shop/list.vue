<template>
  <div class="app-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">待审核</el-menu-item>
    </el-menu>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.row.shop_id }}</template>
      </el-table-column>
      <el-table-column label="商家名称" align="center" width="95">
        <template slot-scope="scope">{{ scope.row.shop_name }}</template>
      </el-table-column>

      <el-table-column label="LOGO" width="110" align="center">
        <template slot-scope="scope">
          <el-avatar shape="square" :size="50" :src="scope.row.shop_logo">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="主营类目" width="110" align="center">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.main_type | mainTypeFilter}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="用户" align="center" width="200">
        <template slot-scope="scope">
          <div style="height:120;">
            <el-tag type="success">{{ scope.row.user.username }}</el-tag>
            <el-avatar :size="60" :src="scope.row.user.avatar">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </div>
        </template>
      </el-table-column>

        <el-table-column class-name="status-col" label="认证信息" width="110" align="center">
            <template slot-scope="scope">
        <el-popover trigger="click" placement="top" title="认证信息" :width="400">
            <el-card :body-style="{ padding: '10px' }">
             <p>经营范围: {{ scope.row.main_business }}</p>
            <p>营业执照代码: {{ scope.row.license_code }}</p>
            <p>营业执照图片: 
                <el-image 
                    style="width: 100px; height: 100px"
                    :src="scope.row.license_img" 
                    :preview-src-list="[scope.row.license_img]">
                </el-image>
            </p>
            <p>法人姓名: {{ scope.row.legal_person_name }}</p>
            <p>法人身份证号码: {{ scope.row.identity_code }}</p>
            <p>身份证正面: 
                <el-image 
                    style="width: 100px; height: 100px"
                    :src="scope.row.identify_card_z_img" 
                    :preview-src-list="[scope.row.identify_card_z_img]">
                </el-image>
            </p>
            <p>身份证反面: 
                <el-image 
                    style="width: 100px; height: 100px"
                    :src="scope.row.identify_card_f_img" 
                    :preview-src-list="[scope.row.identify_card_f_img]">
                </el-image>
            </p>
            <p>地址: {{ scope.row.province + scope.row.city + scope.row.area + scope.row.shop_address}}</p>
            </el-card>
         
          <div slot="reference" class="name-wrapper" style="cursor:pointer;" >
            <el-tag size="medium">认证信息</el-tag>
          </div>
        </el-popover>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | colorFilter">{{ scope.row.status | statusNameFilter}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="280" label="操作">
        <template slot-scope="scope">
          
<el-popconfirm
v-if="scope.row.status == 0"
            confirmButtonText="审核通过"
            cancelButtonText="审核驳回"
            icon="el-icon-info"
            iconColor="red"
            title="确认审核？"
            @onConfirm="auditShop('confirm',scope.row.shop_id)"
            @onCancel="auditShop('cancel',scope.row.shop_id)"
          >
            <el-button v-if="scope.row.status == 0" slot="reference" type="success">审核</el-button>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="p-bar"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size.sync="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { shopList,auditShop } from "@/api/user";

export default {
  filters: {
    colorFilter(status) {
      const statusMap = {
        0: "default",
        1: "success",
        2: "gray",
        3: "danger"
      };
      return statusMap[status] ? statusMap[status] : "default";
    },
    statusNameFilter(status) {
      const statusNameMap = {
        0: "审核中",
        1: "审核通过",
        2: "审核驳回"
      };
      return statusNameMap[status];
    },
    mainTypeFilter(status) {
      const statusNameMap = {
        1: "实物商品",
        2: "虚拟商品",
        3: "服务商品"
      };
      return statusNameMap[status];
    }
  },
  data() {
    return {
      activeIndex: "1",
      currentPage: 1,
      pageSize: 15,
      pageSizes: [15, 30, 60, 100],
      total: 1,
      list: [],
      listLoading: true
    };
  },
  watch: {
    activeIndex(val) {
      this.$router.push(`${this.$route.path}?activeIndex=${val}`);
    }
  },
  created() {
    const activeIndex = this.$route.query.activeIndex;
    if (activeIndex) {
      this.activeIndex = activeIndex;
    }
    this.handleSelect(this.activeIndex);
  },
  methods: {
      auditShop(type, shop_id) {
      let data = { shop_ids: [shop_id] };
      if (type == "confirm") {
        data.status = 1;
      } else if (type == "cancel") {
        data.status = 2;
      }

      auditShop(data).then(response => {
        if (response.status_code === 200) {
          this.$notify({
            title: "审核完成",
            message: "success",
            type: "success",
            duration: 2000
          });
          this.getList();
        }
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      this.getList();
    },
    getList() {
      this.listLoading = true;

      var key = this.activeIndex;
      var query = {};
      if (key == 1) {
        query = {};
      } else if (key == 2) {
        query = {
          status: 0
        };
      }

      var listQuery = {
        page: this.currentPage,
        limit: this.pageSize
      };

      if (query) {
        listQuery = Object.assign(listQuery, this.listQuery, query);
      }

      shopList(listQuery).then(response => {
        if (response.status_code === 200) {
          this.currentPage = Number(response.data.current_page);
          this.pageSize = Number(response.data.per_page);
          this.total = response.data.total;
          this.list = response.data.data;
          this.listLoading = false;
        }
      });
    },
    // 更改每页展示数量
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    },
    // 更改当前页数
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    }
  }
};
</script>
