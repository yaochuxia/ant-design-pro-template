import React from 'react';
import 'echarts/lib/chart/line' //图表类型
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

//导入echarts
let echarts = require('echarts/lib/echarts'); //必须

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
    };
    initLine() {
        const { data } = this.props;//外部传入的data数据
        let myChart = echarts.init(this.refs.lineReact) //初始化echarts
        //我们要定义一个setLineOption函数将data传入option里面
        let options = this.setLineOption(data);
        myChart.setOption(options);
    };
    setLineOption(data) {
        return {
            color: ['#108ee9', '#f46e65'],
            grid: {
                top: 30,
                left: '2%',
                right: '1%'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['意向', '成交'],
                bottom: 0
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: data
        }
    };
    componentDidMount() {
        this.initLine()
    };

    componentDidUpdate() {
        this.initLine()
    }

    render() {
        return (
            <div className="ine-react">
                <div style={{ width: "100%", height: "380px" }}></div>
            </div>
        )
    }
}