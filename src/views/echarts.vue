<template>
  <div>
    <el-card>
      <div ref="echart" style="width: 100%; height: 300px"></div>
    </el-card>
    <el-card>
      <div ref="echarts1" style="width: 100%; height: 300px"></div>
    </el-card>
  </div>
</template>
<script>
import { getHome } from "@/api/data";
import * as echarts from "echarts";
export default {
  name: "echarts",
  data() {
    return {
      tableData: [],
      echartsData: {
        video: {
          tooltip: {
            trigger: "item",
          },
          color: ["red", "aqua", "white", "blue", "green", "aqua", "pink"],
          series: [],
        },
        // 用户图配置
        user: {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 2,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "red"],
          series: [],
        },
        // 折现图配置
        order: {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: [
              // orderData:{
              //   date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
              //   data: List
              // },
            ],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "red", "aqua", "pinl", "blue", "white"],
          series: [],
        },
      },
    };
  },
  methods: {
    getTableData() {
      getHome().then((res) => {
        this.tableData = res.data.data.tableData;

        // 折线图的展示
        const order = res.data.data.orderData;
        // console.log(order);
        this.echartsData.order.xAxis.data = order.date;
        let keyArray = Object.keys(order.data[0]);
        keyArray.forEach((key) => {
          this.echartsData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        const myEchartsOrder = echarts.init(this.$refs.echart);
        myEchartsOrder.setOption(this.echartsData.order);

        // 用户图
        this.echartsData.user.xAxis.data = res.data.data.userData.map(
          (item) => item.date
        );
        this.echartsData.user.series.push({
          name: "新增用户",
          data: res.data.data.userData.map((item) => item.new),
          type: "bar",
        });
        this.echartsData.user.series.push({
          name: "活跃用户",
          data: res.data.data.userData.map((item) => item.active),
          type: "bar",
        });

        const myEchartsOrder2 = echarts.init(this.$refs.echarts1);
        myEchartsOrder2.setOption(this.echartsData.user);
      });
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>
<style lang="scss" scoped></style>
