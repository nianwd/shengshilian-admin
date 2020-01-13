<template>
  <div class="app-container">
      <div class="filter-container">
      

      <router-link :to="'/goods/goodsCategory/create?is_self=1'">
        <el-button
        v-if="activeIndex == 1"
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-plus"
        >添加自营分类</el-button>
      </router-link>

      <router-link :to="'/goods/goodsCategory/create?is_self=0'">
        <el-button
        v-if="activeIndex == 2"
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-plus"
        >添加商家分类</el-button>
      </router-link>

      
    </div>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">自营商品分类</el-menu-item>
      <el-menu-item index="2">商家商品分类</el-menu-item>
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
        <template slot-scope="scope">{{ scope.row.category_id }}</template>
      </el-table-column>
      <el-table-column label="分类名称" align="center" width="95">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.category_name }}</el-tag>
        </template>
      </el-table-column>
       <el-table-column label="分类图片" width="130" align="center">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.img"></el-image>
        </template>
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
          <router-link :to="'/goods/goodsCategory/edit/'+scope.row.category_id+'?is_self=1'">
            <el-button v-if="activeIndex == 1" type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
          </router-link>
          <router-link :to="'/goods/goodsCategory/edit/'+scope.row.category_id+'?is_self=0'">
            <el-button v-if="activeIndex == 2" type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
          </router-link>

          <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteGoodsCategory(scope.row.category_id)">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { goodsCategoryList,deleteGoodsCategory } from "@/api/goods";

export default {
  name: "list",
  data() {
    return {
      activeIndex: "1",
      list: [],
      listLoading: true
    };
  },
  watch: {
    activeIndex(val) {
      this.$router.push(`${this.$route.path}?activeIndex=${val}`)
    }
  },
  created() {
    const activeIndex = this.$route.query.activeIndex
    if (activeIndex) {
      this.activeIndex = activeIndex
    }
    this.handleSelect(this.activeIndex);
  },
  methods: {
    deleteGoodsCategory(category_id){
      this.$confirm("商品分类删除确认", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteGoodsCategory(category_id).then(response => {
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
        query = {
          is_self: 1
        };
      } else if (key == 2) {
        query = {
          is_self: 0
        };
      }

      goodsCategoryList(query).then(response => {
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
