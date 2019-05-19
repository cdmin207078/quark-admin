<template>
  <div>
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>Logo</BreadcrumbItem>
      <BreadcrumbItem>文章</BreadcrumbItem>
      <BreadcrumbItem>写文章</BreadcrumbItem>
    </Breadcrumb>

    <Row :gutter="16">
      <Col span="18">
        <Card dis-hover>
          <Input placeholder="标题" style="margin-bottom:10px;" size="large"></Input>
          <Input
            type="textarea"
            :autosize="{minRows: 20}"
            placeholder="穿越旷野的风啊 \ 慢些走 \ 我用沉默告诉你 \ 我醉了酒"
          ></Input>
        </Card>
      </Col>
      <Col span="6">
        <Card dis-hover>
          <p slot="title">发布</p>
          <p>
            <b>发布时间</b>
          </p>
          <p>
            <RadioGroup v-model="pub_time_type" @on-change="pub_time_type_change" vertical>
              <Radio label="0">
                <span>立即</span>
              </Radio>
              <Radio label="1">
                <span>定时</span>
              </Radio>
              <p v-if="pub_time_type == '1'" class="sub_input" style="margin-bottom:5px;">
                <DatePicker type="datetime" :value="pub_time" placeholder="发布时间"></DatePicker>
              </p>
            </RadioGroup>
          </p>
          <p>
            <b>可见性</b>
          </p>
          <p>
            <RadioGroup v-model="pub_visibility" @on-change="pub_visibility_change" vertical>
              <Radio label="0">
                <span>公开</span>
              </Radio>
              <p v-if="pub_visibility == '0'" class="sub_input">
                <Checkbox v-model="pub_visibility_make_top">将文章置于首页顶端</Checkbox>
              </p>
              <Radio label="1">
                <span>密码保护</span>
              </Radio>
              <p v-if="pub_visibility == '1'" class="sub_input">
                <Input v-model="pub_visibility_password" placeholder="密码"></Input>
              </p>
              <Radio label="2">
                <span>私密</span>
              </Radio>
            </RadioGroup>
          </p>
          <p>
            <b>讨论</b>
          </p>
          <p>
            <Checkbox v-model="pub_comments">允许评论</Checkbox>
          </p>
          <br>
          <p>
            <Button>保存草稿</Button>
            <Button>预览</Button>
            <Button type="primary">发布</Button>
          </p>
        </Card>
        <br>
        <Card dis-hover>
          <p slot="title">分类</p>
          <Cascader :data="categories"></Cascader>
        </Card>
        <br>
        <Card dis-hover>
          <p slot="title">标签</p>
          <Cascader :data="categories"></Cascader>
        </Card>
        <br>
        <Card dis-hover>
          <p slot="title">特色图片</p>
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pub_time_type: "0",
      pub_time: new Date(),
      pub_visibility: "0",
      pub_visibility_make_top: false,
      pub_visibility_password: "",
      pub_comments: false,
      categories: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    pub_time_type_change: function() {
      this.pub_time = new Date();
    },
    pub_visibility_change: function() {
      if (this.pub_visibility == "0") {
        this.pub_visibility_make_top = false;
      } else if (this.pub_visibility == "1") {
        this.pub_visibility_password = "";
      }
    },
    publish: function() {}
  }
};
</script>

<style scoped>
.sub_input {
  padding-left: 15px;
}
</style>