<template>
  <div class="app-container">
      <div class="filter-container">
      
      <router-link :to="'/goods/goodsAttr/create'">
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-plus"
        >添加商品属性</el-button>
      </router-link>

      
    </div>

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
      <el-table-column label="属性名称" align="center" width="95">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.attr_name }}</el-tag>
        </template>
      </el-table-column>
       
      </el-table-column>
       <el-table-column label="排序" width="80" align="center">
          <template slot-scope="scope">{{ scope.row.order }}</template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="280" label="操作">
        <template slot-scope="scope">
          <router-link :to="'/goods/goodsAttr/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
          </router-link>
          
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteGoodsAttr(scope.row.id)">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { goodsAttrList,deleteGoodsAttr } from "@/api/goods";

export default {
  name: "list",
  data() {
    return {
      list: [],
      listLoading: true
    };
  },
  
  created() {
    this.getList();
  },
  methods: {
    deleteGoodsAttr(id){
      this.$confirm("商品属性删除确认", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteGoodsAttr(id).then(response => {
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
    getList() {
      this.listLoading = true;

      goodsAttrList().then(response => {
        if (response.status_code === 200) {
          this.list = response.data;
          this.listLoading = false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
