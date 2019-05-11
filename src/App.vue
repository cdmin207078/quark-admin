<template>
  <div id="app" class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="layout-logo">logo</div>
      <Menu theme="dark" active-name="1" :style="{width: '200px'}">
        <MenuItem name="1">
          <Icon type="md-game-controller-b" />仪表盘
        </MenuItem>
        <MenuGroup title="文章">
          <MenuItem name="2">
            <Icon type="md-document"/>所有文章
          </MenuItem>
          <MenuItem name="3">
            <Icon type="md-create" />写文章
          </MenuItem>
          <MenuItem name="4">
            <Icon type="md-albums" />文章分类
          </MenuItem>
          <MenuItem name="5">
            <Icon type="md-pricetags" />标签
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="用户">
          <MenuItem name="6">
            <Icon type="md-contacts" />所有用户
          </MenuItem>
          <MenuItem name="7">
            <Icon type="md-person-add" />添加用户
          </MenuItem>
          <MenuItem name="8">
            <Icon type="ios-contact" />我的个人资料
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="设置">
          <MenuItem name="9">
            <Icon type="md-options" />常规
          </MenuItem>
          <MenuItem name="10">
            <Icon type="md-images" />媒体
          </MenuItem>
          <MenuItem name="11">
            <Icon type="md-link" />固定链接
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card dis-hover>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem>
              <Input search enter-button placeholder="文章标题 / 内容" style="width:300px;"/>
            </FormItem>
          </Form>
          <Table border :columns="columns7" :data="data6"></Table>
          <Page :total="100" show-sizer show-total :style="{marginTop: '10px'}"/>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      },
      columns7: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
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
