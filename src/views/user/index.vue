<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.row.user_id }}</template>
      </el-table-column>
      <el-table-column label="用户名" align="center" width="95">
        <template slot-scope="scope">{{ scope.row.username }}</template>
      </el-table-column>
      <el-table-column label="手机号码" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="头像" width="110" align="center">
        <template slot-scope="scope">
          <el-avatar shape="square" :size="50" :src="scope.row.avatar">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="级别" width="110" align="center">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.user_grade | colorFilter"
          >{{ scope.row.user_grade | userGradeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="角色"
        width="110"
        align="center"
        :filters="[{ text: '商家', value: 1 }, { text: '代理', value: 2 }, { text: '合伙人', value: 3 },{ text: '无', value: 0 }]"
        :filter-method="filterTag"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.user_role | colorFilter"
          >{{ scope.row.user_role | userRoleFilter }}</el-tag>
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
import { userList } from "@/api/user";

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
        0: "冻结",
        1: "正常"
      };
      return statusNameMap[status];
    },
    userGradeFilter(user_grade) {
      const userGradeMap = {
        1: "会员",
        2: "VIP"
      };
      return userGradeMap[user_grade];
    },
    userRoleFilter(user_role) {
      const userRoleMap = {
        0: "无",
        1: "商家",
        2: "代理",
        3: "合伙人"
      };
      return userRoleMap[user_role];
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 15,
      pageSizes: [15, 30, 60, 100],
      total: 1,
      list: [],
      listLoading: true
    };
  },
  created() {
    this.getList();
  },
  methods: {
    filterTag(value, row) {
        // console.log({value, row})
      return row.user_role == value;
    },
    getList() {
      this.listLoading = true;

      var listQuery = {
        page: this.currentPage,
        limit: this.pageSize
      };

      userList(listQuery).then(response => {
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
