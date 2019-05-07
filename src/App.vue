<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">大碗宽面</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">文章</b-nav-item>
          <b-nav-item href="#">设置</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-form-group label="Table Options">
      <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>
      <b-form-checkbox v-model="bordered" inline>Bordered</b-form-checkbox>
      <b-form-checkbox v-model="borderless" inline>Borderless</b-form-checkbox>
      <b-form-checkbox v-model="outlined" inline>Outlined</b-form-checkbox>
      <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
      <b-form-checkbox v-model="hover" inline>Hover</b-form-checkbox>
      <b-form-checkbox v-model="dark" inline>Dark</b-form-checkbox>
      <b-form-checkbox v-model="fixed" inline>Fixed</b-form-checkbox>
      <b-form-checkbox v-model="footClone" inline>Foot Clone</b-form-checkbox>
    </b-form-group>

    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :items="items"
      :fields="fields"
    ></b-table>

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" }
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false
    };
  }
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
