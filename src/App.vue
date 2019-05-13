<template>
  <div id="app" class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="layout-logo">logo</div>
      <Menu theme="dark" active-name="1" :style="{width: '200px'}">
        <MenuItem name="1" to="/">
          <Icon type="md-game-controller-b"/>仪表盘
        </MenuItem>
        <MenuGroup title="文章">
          <MenuItem name="2" to="/articles">
            <Icon type="md-document"/>所有文章
          </MenuItem>
          <MenuItem name="3" to="/articles/create">
            <Icon type="md-create"/>写文章
          </MenuItem>
          <MenuItem name="4" to="/articles/categories">
            <Icon type="md-albums"/>文章分类
          </MenuItem>
          <MenuItem name="5" to="/articles/tags">
            <Icon type="md-pricetags"/>标签
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="用户">
          <MenuItem name="6" to="/users">
            <Icon type="md-contacts"/>所有用户
          </MenuItem>
          <MenuItem name="7" to="/users/credate">
            <Icon type="md-person-add"/>添加用户
          </MenuItem>
          <MenuItem name="8" to="/users/profile">
            <Icon type="ios-contact"/>我的个人资料
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="设置">
          <MenuItem name="9" to="/option/general">
            <Icon type="md-options"/>常规
          </MenuItem>
          <MenuItem name="10" to="/option/media">
            <Icon type="md-images"/>媒体
          </MenuItem>
          <MenuItem name="11" to="/option/permalink">
            <Icon type="md-link"/>固定链接
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layout-logo {
  width: 150px;
  height: 50px;
  background: #7483a0;
  border-radius: 3px;
  margin: 10px auto;
  font-size: 36px;
  letter-spacing: 3px;
  font-style: italic;
  text-align: center;
  color: #b3b8c1;
  line-height: 50px;
}
</style>
