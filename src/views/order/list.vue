<template>
  <div class="app-container">
    <div class="filter-container"></div>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="all">全部</el-menu-item>
      <el-menu-item index="2">待发货</el-menu-item>
      <el-menu-item index="3">待收货</el-menu-item>
      <el-menu-item index="4">已完成</el-menu-item>
      <el-menu-item index="-2">售后订单</el-menu-item>
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
        <template slot-scope="scope">{{ scope.row.id }}</template>
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

      <el-table-column label="商品信息" align="center" width="250">
        <template slot-scope="scope">
          <div style="height:120;" v-for="item in scope.row.products" :key="item.id">
            <el-tag type="success">{{ item.goods_name }}</el-tag>
            <el-image style="width: 100px; height: 100px" :src="item.goods_img"></el-image>
          </div>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="180" align="center">
        <template slot-scope="scope">
          <p>
            <el-tag
              effect="dark"
              :type="scope.row.order_status | colorFilter"
            >{{ scope.row.order_status | orderStatusFilter}}</el-tag>
          </p>
          <p>
            <el-tag
              effect="dark"
              :type="scope.row.pay_status | colorFilter"
            >{{ scope.row.pay_status | payStatusFilter}}</el-tag>
          </p>
          <p>
            <el-tag
              effect="dark"
              :type="scope.row.shipping_status | colorFilter"
            >{{ scope.row.shipping_status | shippingStatusFilter}}</el-tag>
          </p>
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
          <el-button
            v-if="activeIndex == 2"
            type="primary"
            size="mini"
            icon="el-icon-guide"
            @click="openDialogDelivery(scope.row.id)"
          >订单发货</el-button>

          <el-button
            v-if="activeIndex == '-2'"
            type="primary"
            size="mini"
            icon="el-icon-sold-out"
            @click="auditOrderRefund(scope.row.id)"
          >退货处理</el-button>
          <el-button
            v-if="activeIndex == '-2'"
            type="primary"
            size="mini"
            icon="el-icon-sold-out"
            @click="orderRefund(scope.row.id)"
          >退款</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="订单发货" :visible.sync="dialogDeliveryVisible">
      <div style="padding-left:53px;padding-bottom:10px;">
        是否配送
        <el-switch v-model="delivery" :active-value="false" :inactive-value="true"></el-switch>
      </div>

      <el-form :model="deliveryData" :disabled="delivery">
        <el-form-item label="物流公司" :label-width="formLabelWidth">
          <el-select
            v-model="deliveryData.shipping_code"
            :filterable="true"
            placeholder="请选择物流公司"
            @change="changeShipping"
          >
            <el-option
              v-for="item in shipping"
              :key="item.shipping_code"
              :label="item.shipping_name"
              :value="item.shipping_code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物流单号" :label-width="formLabelWidth">
          <el-input v-model="deliveryData.delivery_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="deliveryData.note" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDeliveryVisible = false">取 消</el-button>
        <el-button type="primary" @click="orderDelivery">确 定</el-button>
      </div>
    </el-dialog>

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
import {
  orderList,
  orderDelivery,
  auditOrderRefund,
  orderRefund,
  getShipping
} from "@/api/order";

export default {
  name: "list",
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
    //订单状态（-2售后中 -1已关闭，1待付款，2待发货，3待收货，4已完成）
    orderStatusFilter(status) {
      const statusNameMap = {
        "-2": "售后中",
        "-1": "已关闭",
        "1": "待付款",
        "2": "待发货",
        "3": "待收货",
        "4": "已完成"
      };
      return statusNameMap[status];
    },
    //支付状态（0未支付，1已支付）
    payStatusFilter(status) {
      const statusNameMap = {
        0: "未支付",
        1: "已支付"
      };
      return statusNameMap[status];
    },
    //发货状态（默认0未发货1已发货）
    shippingStatusFilter(status) {
      const statusNameMap = {
        0: "未发货",
        1: "已发货"
      };
      return statusNameMap[status];
    }
  },
  data() {
    return {
      shipping: [],
      delivery: false,
      dialogDeliveryVisible: false,
      formLabelWidth: "120px",
      deliveryData: {},
      activeIndex: "all",
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
    this.getShipping();
  },
  methods: {
    openDialogDelivery(order_id) {
      this.deliveryData.order_id = order_id;
      this.dialogDeliveryVisible = true;
    },
    changeShipping(e) {
      this.deliveryData.shipping_name = this.shipping.find(i => {
        return (i.shipping_code = e);
      }).shipping_name;
      console.log({ changeShipping: e }, { deliveryData: this.deliveryData });
    },
    getShipping() {
      getShipping().then(response => {
        if (response.status_code === 200) {
          this.shipping = response.data;
        }
      });
    },
    orderDelivery() {
      let data = this.deliveryData;

      orderDelivery(data).then(response => {
        if (response.status_code === 200) {
          this.$notify({
            title: "操作成功",
            message: "success",
            type: "success",
            duration: 2000
          });
          this.deliveryData = {};
          this.dialogDeliveryVisible = false;
          this.getList();
        }
      });
    },
    auditOrderRefund(order_id) {
      let data = { order_id: order_id };

      auditOrderRefund(data).then(response => {
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
    },
    orderRefund(order_id) {
      let data = { order_id: order_id };

      orderRefund(data).then(response => {
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
      if (key == "all") {
        query = {};
      } else if (key == 2) {
        query = {
          order_status: 2
        };
      } else if (key == 3) {
        query = {
          order_status: 3
        };
      } else if (key == 4) {
        query = {
          order_status: 4
        };
      } else if (key == -2) {
        query = {
          order_status: -2
        };
      }

      var listQuery = {
        page: this.currentPage,
        limit: this.pageSize
      };

      if (query) {
        listQuery = Object.assign(listQuery, query);
      }

      orderList(listQuery).then(response => {
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

<style scoped>
</style>
