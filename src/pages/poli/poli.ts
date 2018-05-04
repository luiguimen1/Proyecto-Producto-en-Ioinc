import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the PoliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-poli',
    templateUrl: 'poli.html',
})
export class PoliPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PoliPage');
    }
    GenGrafica() {
        let myChart = HighCharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Browser market shares. January, 2018'
            },
            subtitle: {
                text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [{
                'colorByPoint': 'true',
                "name": "Browsers",
                "data": [
                    {
                        "name": "Chrome",
                        "y": 62.74,
                        "drilldown": "Chrome"
                    },
                    {
                        "name": "Firefox",
                        "y": 10.57,
                        "drilldown": "Firefox"
                    },
                    {
                        "name": "Internet Explorer",
                        "y": 7.23,
                        "drilldown": "Internet Explorer"
                    },
                    {
                        "name": "Safari",
                        "y": 5.58,
                        "drilldown": "Safari"
                    },
                    {
                        "name": "Edge",
                        "y": 4.02,
                        "drilldown": "Edge"
                    },
                    {
                        "name": "Opera",
                        "y": 1.92,
                        "drilldown": "Opera"
                    },
                    {
                        "name": "Other",
                        "y": 7.62,
                        "drilldown": null
                    }
                ]
            }
            ]
        });
    }
}
