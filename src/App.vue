<template>
  <div id="app">
     <div class="container">
        <div class="mid">
          <div class="top">
            <h2>2021年全年仪征人均可支配收入结构表</h2>
          </div>
          <div class="buttom">
            <!--引入eltable，数据挂载在vue data里-->
             <el-table
                    :data="tableData"
                     ref="table1"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                    max-height="400">
                    <el-table-column
                      fixed
                      prop="title"
                      label="指标名称"
                      width="150">
                    </el-table-column>
                    <el-table-column
                      label="全体居民"
                      >
                            <el-table-column
                              prop="all2019"
                              label="2019"
                              width="100">
                            </el-table-column>
                            <el-table-column
                              prop="all2020"
                              label="2020"
                              width="100">
                            </el-table-column>
                            <el-table-column
                              prop="all2021"
                              label="2021"
                              width="100">
                              </el-table-column>
                               <el-table-column
                              prop="addAll"
                              label="增幅%"
                              width="100">
                              </el-table-column>
                               <el-table-column
                               prop="pctAll"
                              label="比重%"
                              width="100">
                              </el-table-column>
                    </el-table-column>
                    <el-table-column
                      label="城镇居民">
                          <el-table-column
                                  prop="ct2019"
                                  label="2019"
                                  width="100">
                                </el-table-column>
                                <el-table-column
                                  prop="ct2020"
                                  label="2020"
                                  width="100">
                                </el-table-column>
                                <el-table-column
                                  prop="ct2021"
                                  label="2021"
                                  width="100">
                                  </el-table-column>
                                  <el-table-column
                                  prop="addCt"
                                  label="增幅%"
                                  width="100">
                                  </el-table-column>
                                  <el-table-column
                                  prop="pctCt"
                                  label="比重%"
                                  width="100">
                                  </el-table-column>
                    </el-table-column>
                    <el-table-column
                      label="农村居民">
                          <el-table-column
                                  prop="cty2019"
                                  label="2019"
                                  width="100">
                                </el-table-column>
                                <el-table-column
                                  prop="cty2020"
                                  label="2020"
                                  width="100">
                                </el-table-column>
                                <el-table-column
                                  prop="cty2021"
                                  label="2021"
                                  width="100">
                                  </el-table-column>
                                  <el-table-column
                                  prop="addCty"
                                  label="增幅%"
                                  width="100">
                                  </el-table-column>
                                  <el-table-column
                                  prop="pctCty"
                                  label="比重%"
                                  width="100">
                                  </el-table-column>
                    </el-table-column>
             </el-table>
          </div>
          <div id="midmid" style="margin-left:200px;opacity: 1;">
            <!--引入tab面板-->
             <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="2021年仪征城乡居民收入增长情况" name="first">
                    
                        <div id="echart"  style="width: 1000px;height:600px;margin-left: 100px;margin-top: 100rpx;"></div>
                    
                  </el-tab-pane>
              <el-tab-pane label="2021年仪征居民各项收入占比" name="second">

                        <div id="echart2"  style="width: 1000px;height:1000px;margin-left: 100px;margin-top: 100rpx;"></div>


              </el-tab-pane>
              <el-tab-pane label="2021年仪征居民消费支出占比" name="third">
                        <div id="echart3"  style="width: 1000px;height:1000px;margin-left: 100px;margin-top: 100rpx;"></div>
              </el-tab-pane>
             
            </el-tabs>
          </div>
          <div class="footer">
            <div>
            <el-link type="primary" href="http://www.yizheng.gov.cn"><h2>仪征政府</h2></el-link>
            </div>
            <div>
            <el-link type="primary" href="http://www.yizheng.gov.cn/zgyz/sjfb/sjfb.shtml"><h2>数据来源</h2></el-link>
            </div>
            <div>
            <el-link type="primary" href="http://www.yizheng.gov.cn/zgyz/zwfw/zwfw.shtml"><h2>其他政务</h2></el-link>
            </div>
            <div>
            <el-link type="primary" href="./yizheng.zip" download="./yizheng.zip" target="view_window"><h2>数据下载</h2></el-link>
            </div>
            <div>
            <el-link type="primary"  @click="open1"><h2>联系我们</h2></el-link>
            </div>
          </div>
        </div>
       

     </div>
  </div>
</template>


<script>

export default {
  name: 'app',
  data(){
    return{
      activeName: 'first',
      tableData:[
        {title:'可支配收入',all2019:'35189',all2020:'36862',all2021:'40255',addAll:'9.2',pctAll:'100',ct2019:'46427',ct2020:'48005',ct2021:'52037',addCt:'8.4',pctCt:'100',cty2019:'22459',cty2020:'23942',cty2021:'26376',addCty:'10.2',pctCty:'100'},
        {title:'(一)工资性收入',all2019:'23539',all2020:'24563',all2021:'27084',addAll:'10.3',pctAll:'67.3',ct2019:'32145',ct2020:'33058',ct2021:'36105',addCt:'9.2',pctCt:'69.4',cty2019:'13789',cty2020:'14713',cty2021:'16458',addCty:'11.9',pctCty:'62.4'},
        {title:'(二)经营性收入',all2019:'6307',all2020:'6501',all2021:'6907',addAll:'6.2',pctAll:'17.2',ct2019:'7877',ct2020:'8034',ct2021:'8504',addCt:'5.9',pctCt:'16.3',cty2019:'4528',cty2020:'4723',cty2021:'5026',addCty:'6.4',pctCty:'19.1'},
        {title:'(三)财产性收入',all2019:'1076',all2020:'1153',all2021:'1241',addAll:'7.6',pctAll:'3.1',ct2019:'1656',ct2020:'1758',ct2021:'1883',addCt:'7.1',pctCt:'3.6',cty2019:'418',cty2020:'451',cty2021:'484',addCty:'7.3',pctCty:'1.8'},
        {title:'(四)转移性收入',all2019:'4268',all2020:'4645',all2021:'5023',addAll:'8.1',pctAll:'12.5',ct2019:'4748',ct2020:'5155',ct2021:'5545',addCt:'7.6',pctCt:'10.7',cty2019:'3724',cty2020:'4055',cty2021:'4408',addCty:'8.7',pctCty:'16.7'},
     
        {title:'居民消费支出',all2019:'21114',all2020:'20632',all2021:'24432',addAll:'18.4',pctAll:'100',ct2019:'25132',ct2020:'24712',ct2021:'28875',addCt:'16.8',pctCt:'100',cty2019:'16562',cty2020:'15901',cty2021:'19199',addCty:'20.7',pctCty:'100'},
        {title:'(一)食品烟酒',all2019:'6329',all2020:'6058',all2021:'7158',addAll:'18.2',pctAll:'29.3',ct2019:'7545',ct2020:'7251',ct2021:'8454',addCt:'16.6',pctCt:'29.3',cty2019:'4952',cty2020:'4675',cty2021:'5632',addCty:'20.5',pctCty:'29.3'},
        {title:'(二)衣着',all2019:'2044',all2020:'2106',all2021:'2465',addAll:'17.0',pctAll:'10.1',ct2019:'2796',ct2020:'2911',ct2021:'3376',addCt:'16.0',pctCt:'11.7',cty2019:'1192',cty2020:'1172',cty2021:'1392',addCty:'18.8',pctCty:'7.3'},
        {title:'(三)居住',all2019:'3938',all2020:'4133',all2021:'4770',addAll:'15.4',pctAll:'19.5',ct2019:'4266',ct2020:'4526',ct2021:'5162',addCt:'14.1',pctCt:'17.9',cty2019:'3566',cty2020:'3677',cty2021:'4309',addCty:'17.2',pctCty:'22.4'},
        {title:'(四)生活用品及服务',all2019:'1570',all2020:'1646',all2021:'1931',addAll:'17.3',pctAll:'7.9',ct2019:'2086',ct2020:'2197',ct2021:'2542',addCt:'15.7',pctCt:'8.8',cty2019:'985',cty2020:'1008',cty2021:'1211',addCty:'20.1',pctCty:'6.3'},
        {title:'(五)交通通信',all2019:'2281',all2020:'2593',all2021:'2593',addAll:'22.4',pctAll:'10.6',ct2019:'2514',ct2020:'2343',ct2021:'2856',addCt:'21.9',pctCt:'9.9',cty2019:'2017',cty2020:'1860',cty2021:'2284',addCty:'22.8',pctCty:'11.9'},
        {title:'(六)教育文化娱乐',all2019:'3605',all2020:'4008',all2021:'4008',addAll:'20.9',pctAll:'16.4',ct2019:'4236',ct2020:'3914',ct2021:'4623',addCt:'18.1',pctCt:'16.0',cty2019:'2890',cty2020:'2620',cty2021:'3284',addCty:'25.3',pctCty:'17.1'},
        {title:'(七)医疗保健',all2019:'884',all2020:'807',all2021:'977',addAll:'21.1',pctAll:'4.0',ct2019:'1139',ct2020:'1033',ct2021:'1235',addCt:'19.6',pctCt:'4.3',cty2019:'594',cty2020:'545',cty2021:'674',addCty:'23.7',pctCty:'3.5'},
        {title:'(八)其他用品和服务',all2019:'463',all2020:'448',all2021:'529',addAll:'18.0',pctAll:'2.2',ct2019:'550',ct2020:'537',ct2021:'627',addCt:'16.8',pctCt:'2.2',cty2019:'364',cty2020:'344',cty2021:'413',addCty:'20.1',pctCty:'2.2'},
     ]
    }
  },
  mounted() {
    //挂载图表
    this.getLoadEcharts();
    this.getLoadEcharts2();
    this.getLoadEcharts3();
  },
   methods: {
     open1() {
        const h = this.$createElement;

        this.$notify({
          title: '联系我们',
          message: h('i', { style: 'color: black;font-size:20px'}, '联系人：魏志鹏   联系电话：15252554108'),
          position: 'bottom-right'
        });
      },
    //tab页切换
      handleClick(tab, event) {
        console.log(tab, event);
      },
    //修改列表的两个颜色变为黄色
      tableRowClassName({rowIndex}) {
        if (rowIndex === 0 || rowIndex === 5) {
          return 'warning-row';
        } else 
        return '';
      },
      //多Y轴折线柱状混合图
      getLoadEcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("echart")
      );
     
      var option = {
         tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          //x轴数据，分为3年
        xAxis: {
                type: 'category',
                        data: ['2019', '2020', '2021',]
                      },
          //y轴，左边为收入，右边为增幅%            
        yAxis: [
                  {
                     type: 'value',
                     name:'收入',
                     position: 'left',
                     alignTicks: true,
                     axisLine: {
                     show: true,
                     lineStyle: {
                     }
                      },
                      axisLabel: {
                        formatter: '{value} '
                       }
                  },                  {
                     type: 'value',
                     position: 'right',
                     alignTicks: true,
                     axisLine: {
                     show: true,
                     lineStyle: {
                     }
                      },
                      axisLabel: {
                        formatter: '{value} '
                    }
                  }
                ],
                //数据列表
                series: [
                  {
                    type: 'bar',
                    name: '全体居民',
                    data: [this.tableData[0].all2019, this.tableData[0].all2020, this.tableData[0].all2021 ]
                  },
                  {
                    type: 'bar',
                    name: '城镇居民',
                    data: [this.tableData[0].ct2019,this.tableData[0].ct2020,this.tableData[0].ct2021 ]
                  },
                  {
                    type: 'bar',
                    name: '农村居民',
                    data: [ this.tableData[0].cty2019,this.tableData[0].cty2020,this.tableData[0].cty2021]
                  },
                  {
                    name: '全体增幅',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [8.7,4.8,this.tableData[0].addAll]
                  },
                  {
                    name: '城镇增幅',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [8.2,3.4,this.tableData[0].addCt]
                  },
                  {
                    name: '农村增幅',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [8.6,6.6,this.tableData[0].addCty]
                  },
                ]
            };
            myChart.setOption(option);
      },
      getLoadEcharts2() {
            var myChart = this.$echarts.init(
              document.getElementById("echart2")
            );
          
            var option = {
                title: {
          text: '2021年仪征居民各项收入占比',
          subtext: '汇报人:魏志鹏',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '收入占比',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 0.673, name: '工资性收入' },
              { value: 0.172, name: '经营性收入' },
              { value: 0.031, name: '财产净收入' },
              { value: 0.125, name: '转移净收入' },
              
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
            };
                  myChart.setOption(option);
            },
     getLoadEcharts3() {
      var myChart = this.$echarts.init(
        document.getElementById("echart3")
      );
     
      var option = {
          title: {
    text: '2021年仪征居民消费支出占比',
    subtext: '汇报人:魏志鹏',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '消费支出占比',
      type: 'pie',
      radius: '50%',
      data: [
        { value: this.tableData[6].all2021, name: this.tableData[6].title },
        { value: this.tableData[7].all2021, name: this.tableData[7].title },
        { value: this.tableData[8].all2021, name: this.tableData[8].title },
        { value: this.tableData[9].all2021, name: this.tableData[9].title },
        { value: this.tableData[10].all2021, name: this.tableData[10].title },
        { value: this.tableData[11].all2021, name: this.tableData[11].title },
        { value: this.tableData[12].all2021, name: this.tableData[12].title },
        { value: this.tableData[13].all2021, name: this.tableData[13].title },
       
        
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
      };
            myChart.setOption(option);
    },
    
  
  
  
  },
  

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
.container{
  width: 2600px;
  height: 2000px;
  background: url("../src/assets/bg3.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
}
.container .left{
  width: 200px;
  height: 1200px;

}
.container .mid{
justify-content: center;
}
.container .mid .top{

}
.container .mid .buttom{
  width: 1600px;
  height: 400px;
  justify-content: center;
  }
.container .right{
  width: 200px;
  height: 1200px;
  }
.el-table .warning-row {
    background: #FFC000;
}
#echart{
    width: 100%;
    height: 100%;
}
.footer{
  justify-content: space-around;
  width: 1600px;
  display: flex;

}

</style>
