<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.goods_name"
        placeholder="商品名称搜索"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />

      <el-select
        v-model="is_self"
        @change="changeType"
        placeholder="商品类型"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option
          v-for="item in calendarTypeOptions"
          :key="item.key"
          :label="item.display_name+'('+item.key+')'"
          :value="item.key"
        />
      </el-select>

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>

      <router-link :to="'/goods/create'">
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-plus"
        >添加商品</el-button>
      </router-link>

      <!--<el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">-->
      <!--Export-->
      <!--</el-button>-->
    </div>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">上架商品</el-menu-item>
      <el-menu-item index="2">下架商品</el-menu-item>
      <el-menu-item index="3">待审核商品</el-menu-item>
      <el-menu-item index="4">冻结商品</el-menu-item>
    </el-menu>

    <el-button
      v-if="activeIndex == 2"
      class="filter-item"
      style="margin: 10px;"
      type="success"
      @click="changeBatchUp(1)"
    >批量上架</el-button>

    <el-button
      v-if="activeIndex == 1"
      class="filter-item"
      style="margin: 10px;"
      type="primary"
      @click="changeBatchUp(0)"
    >批量下架</el-button>

    <el-popconfirm
      v-if="activeIndex == 3"
      confirmButtonText="审核通过"
      cancelButtonText="审核驳回"
      icon="el-icon-info"
      iconColor="red"
      title="商品审核确认"
      @onConfirm="batchAuditGoods('confirm')"
      @onCancel="batchAuditGoods('cancel')"
    >
      <el-button v-if="activeIndex == 3" style="margin: 10px;" slot="reference" type="warning">批量审核</el-button>
    </el-popconfirm>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" label="ID" width="50">
        <template slot-scope="scope">{{ scope.row.goods_id }}</template>
      </el-table-column>
      <el-table-column align="center" label="商家" width="100">
        <template slot-scope="scope">
          <el-tag type="gray">{{ scope.row.shop.shop_name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品分类" width="100">
        <template slot-scope="scope">{{ scope.row.category_name }}</template>
      </el-table-column>
      <el-table-column label="商品名" align="center" width="150">
        <template slot-scope="scope">{{scope.row.goods_name}}</template>
      </el-table-column>
      <el-table-column label="商品主图" width="110" align="center">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.main_img"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="价格" align="center" width="95">
        <template slot-scope="scope">{{ scope.row.price }}</template>
      </el-table-column>
      <el-table-column label="库存" align="center" width="95">
        <template slot-scope="scope">{{ scope.row.stock }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="上下架" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.is_up | colorFilter">{{ scope.row.is_up | isupFilter}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | colorFilter">{{ scope.row.status_name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <router-link :to="'/goods/edit/'+scope.row.goods_id">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
          </router-link>

          <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteGoods(scope.row.goods_id)">删除</el-button>

          <el-popconfirm
          v-if="activeIndex == 3"
            confirmButtonText="审核通过"
            cancelButtonText="审核驳回"
            icon="el-icon-info"
            iconColor="red"
            title="确认审核该商品？"
            @onConfirm="auditGoods('confirm',scope.row.goods_id)"
            @onCancel="auditGoods('cancel',scope.row.goods_id)"
          >
            <el-button v-if="activeIndex == 3" slot="reference" size="mini" type="success">审核</el-button>
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
import { goodsList, auditGoods, changeBatchUp,deleteGoods } from "@/api/goods";

const calendarTypeOptions = [
  { key: "all", display_name: "全部商品" },
  { key: "self", display_name: "自营商品" },
  { key: "shop", display_name: "商家商品" }
];
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  name: "goods",
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
    isupFilter(status) {
      const statusNameMap = {
        0: "下架",
        1: "上架"
      };
      return statusNameMap[status];
    }
  },
  data() {
    return {
      calendarTypeOptions,
      activeIndex: "1",
      currentPage: 1,
      pageSize: 15,
      pageSizes: [15, 30, 60, 100],
      total: 1,
      is_self: null,
      listQuery: {
        goods_name: null,
      },
      list: [],
      listLoading: true,
      multipleSelection: []
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
    changeType(type){
      this.getList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log(this.multipleSelection)
    },
    deleteGoods(goods_id){
      this.$confirm("商品删除确认", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteGoods(goods_id).then(response => {
            if (response.status_code === 200) {
              this.$notify({
                title: "操作成功",
                message: "success",
                type: "success",
                duration: 2000
              });
              this.getList();
            }
          });
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    changeBatchUp(is_up) {
      this.$confirm("商品上下架确认", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let data = { is_up: is_up };

          if (this.multipleSelection.length > 0) {
            let goods_ids = [];
            for (
              let index = 0;
              index < this.multipleSelection.length;
              index++
            ) {
              const element = this.multipleSelection[index];
              goods_ids.push(element.goods_id);
            }
            data.goods_ids = goods_ids;
          } else {
            this.$message.error("请至少选择一项");
            return;
          }

          changeBatchUp(data).then(response => {
            if (response.status_code === 200) {
              this.$notify({
                title: "操作成功",
                message: "success",
                type: "success",
                duration: 2000
              });
              this.getList();
            }
          });
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    batchAuditGoods(type) {
      let data = {};
      if (type == "confirm") {
        data.status = 1;
      } else if (type == "cancel") {
        data.status = -1;
      }

      if (this.multipleSelection.length > 0) {
        let goods_ids = [];
        for (let index = 0; index < this.multipleSelection.length; index++) {
          const element = this.multipleSelection[index];
          goods_ids.push(element.goods_id);
        }
        data.goods_ids = goods_ids;
      } else {
        this.$message.error("请至少选择一项");
        return;
      }

      auditGoods(data).then(response => {
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
    auditGoods(type, goods_id) {
      let data = { goods_ids: [goods_id] };
      if (type == "confirm") {
        data.status = 1;
      } else if (type == "cancel") {
        data.status = -1;
      }

      auditGoods(data).then(response => {
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
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleFilter() {
      if(!this.listQuery.goods_name){
        this.listQuery.goods_name = null
      }
      this.getList();
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      this.getList();
    },
    getList() {
      console.log({ activeIndex: this.activeIndex });
      this.listLoading = true;

      var key = this.activeIndex;
      var query = {};
      if (key == 1) {
        query = {
          is_up: 1,
          status: 1
        };
      } else if (key == 2) {
        query = {
          is_up: 0,
          status: 1
        };
      } else if (key == 3) {
        query = {
          status: 0
        };
      } else if (key == 4) {
        query = {
          status: 2
        };
      }

      var listQuery = {
        page: this.currentPage,
        limit: this.pageSize
      };
      if(this.is_self){
        if(this.is_self == 'all'){
          listQuery.is_self = null
        }else if(this.is_self == 'self'){
          listQuery.is_self = 1
        }else if(this.is_self == 'shop'){
          listQuery.is_self = 0
        }
      }

      if (query) {
        listQuery = Object.assign(listQuery, this.listQuery, query);
      }
      console.log(listQuery);

      goodsList(listQuery).then(response => {
        if (response.status_code === 200) {
          this.currentPage = Number(response.data.current_page);
          this.pageSize = Number(response.data.per_page);
          this.total = response.data.total;
          this.list = response.data.data;
          this.listLoading = false;
          // console.log({list:this.list})
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
