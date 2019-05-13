<template>
  <div>
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>Logo</BreadcrumbItem>
      <BreadcrumbItem>文章</BreadcrumbItem>
      <BreadcrumbItem>所有文章</BreadcrumbItem>
    </Breadcrumb>

    <Card dis-hover>
      <Form inline>
        <FormItem>
          <Input search enter-button placeholder="文章标题 / 内容" style="width:300px;"/>
        </FormItem>
      </Form>
      <Table border :columns="columns7" :data="data6" size="small"></Table>
      <Page :total="100" show-sizer show-total :style="{marginTop: '10px'}"/>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns7: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "标题",
          key: "title"
        },
        {
          title: "作者",
          key: "author"
        },
        {
          title: "分类目录",
          key: "categories"
        },
        {
          title: "标签",
          key: "tags"
        },
        {
          title: "评论",
          key: "comments"
        },
        {
          title: "日期",
          key: "date"
        }
      ],
      data6: [
        {
          title: "线程池原理初探",
          author: "木瓜芒果",
          categories: "Java开发",
          tags: "Java并发",
          status: 10,
          date: "2019-05-13"
        },
        {
          title: "收到一个神盾局的offer，怎么样？",
          author: "mindwind",
          categories: "青玉案·编",
          tags: "-",
          status: 10,
          date: "2019-05-12"
        },
        {
          title: "ES(Elastic Search)update操作设置无 docment时进行insert",
          author: "LinkLee",
          categories: "-",
          tags: "ElasticSearch",
          status: 10,
          date: "2019-05-11"
        },
        {
          title: "Spring Boot自动配置原理与实践（一）",
          author: "JJian",
          categories: "SpringBoot",
          tags: "Spring Boot",
          status: 10,
          date: "2019-05-12"
        }
      ]
    };
  },
  methods: {}
};
</script>