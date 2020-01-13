<template>
    <div class="app-container">
        <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row>
            <el-table-column align="center" label="ID" width="95">
                <template slot-scope="scope">
                    {{ scope.row.id }}
                </template>
            </el-table-column>
            <el-table-column label="角色名称" align="center" width="95">
                <template slot-scope="scope">
                    <el-tag type="success">{{ scope.row.role_name }}</el-tag>

                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="创建时间" width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.created_at }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { userRoleList } from '@/api/user';

    export default {
        name: "role",
        filters: {
            colorFilter(status) {
                const statusMap = {
                    0: 'default',
                    1: 'success',
                    2: 'gray',
                    3: 'danger',
                };
                return statusMap[status] ? statusMap[status] : 'default';
            },
            statusNameFilter(status) {
                const statusNameMap = {
                    0: '冻结',
                    1: '正常',
                };
                return statusNameMap[status];
            },
        },
        data() {
            return {
                list: [],
                listLoading: true,
            };
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.listLoading = true;

                userRoleList().then(response => {
                    if(response.status_code === 200){
                        this.list = response.data;
                        this.listLoading = false;
                    }
                });
            },
        },
    };
</script>

<style scoped>

</style>
