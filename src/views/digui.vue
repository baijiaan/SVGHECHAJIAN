<template>
  <div></div>
</template>
<script>
export default {
  setup() {
    const data = [
      {
        path: "1",
        meta: {
          title: "白家安",
        },
        children: [
          {
            path: "1-1",
            meta: {
              title: "白家安1-1",
            },
          },
        ],
      },
      {
        path: "2",
        meta: {
          title: "白家安2",
        },
        children: [
          {
            path: "2-1",
            meta: {
              title: "白家安2-1",
            },
          },
        ],
      },
      {
        path: "3",
        meta: {
          title: "白家安3",
        },
        children: [
          {
            path: "3-1",
            meta: {
              title: "白家安3-1",
            },
          },
        ],
      },
    ];
    const fn = (table, list = []) => {
      // console.log(table);
      let res = [];
      for (const route of table) {
        // console.log(route);
        const data = {
          path: route.path,
          title: [...list],
        };
        if (route.meta) {
          const da = route.meta.title;
          data.title = [...data.title, da];
          res.push(data);
          // console.log(res);
        }
        if (route.children) {
          const rea = fn(route.children, data.title);
          res = [...res, ...rea];
        }
      }
      return res;
    };
    fn(data);
    return {
      fn,
    };
  },
};
</script>
<style lang="scss" scoped></style>
