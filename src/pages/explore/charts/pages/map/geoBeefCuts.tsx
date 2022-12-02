import { View } from '@tarojs/components';
import { SkiaChart as SkiaComponent } from 'wrn-echarts';
import Chart from '../../echarts';
import beef from '../../beef';
import '../style.scss';
/**
 * 这个case上的小虚线等没出来
 * https://echarts.apache.org/examples/zh/editor.html?c=line-markline
 */
export default function barPolarRealEstate() {
  const option = {
    tooltip: {},
    visualMap: {
      left: 'center',
      bottom: '10%',
      min: 5,
      max: 100,
      orient: 'horizontal',
      text: ['', 'Price'],
      realtime: true,
      calculable: true,
      inRange: {
        color: ['#dbac00', '#db6e00', '#cf0000']
      }
    },
    series: [
      {
        name: 'French Beef Cuts',
        type: 'map',
        map: 'Beef_cuts_France',
        roam: true,
        emphasis: {
          label: {
            show: false
          }
        },
        selectedMode: false,
        data: [
          { name: 'Queue', value: 15 },
          { name: 'Langue', value: 35 },
          { name: 'Plat de joue', value: 15 },
          { name: 'Gros bout de poitrine', value: 25 },
          { name: 'Jumeau à pot-au-feu', value: 45 },
          { name: 'Onglet', value: 85 },
          { name: 'Plat de tranche', value: 25 },
          { name: 'Araignée', value: 15 },
          { name: 'Gîte à la noix', value: 55 },
          { name: "Bavette d'aloyau", value: 25 },
          { name: 'Tende de tranche', value: 65 },
          { name: 'Rond de gîte', value: 45 },
          { name: 'Bavettede de flanchet', value: 85 },
          { name: 'Flanchet', value: 35 },
          { name: 'Hampe', value: 75 },
          { name: 'Plat de côtes', value: 65 },
          { name: 'Tendron Milieu de poitrine', value: 65 },
          { name: 'Macreuse à pot-au-feu', value: 85 },
          { name: 'Rumsteck', value: 75 },
          { name: 'Faux-filet', value: 65 },
          { name: 'Côtes Entrecôtes', value: 55 },
          { name: 'Basses côtes', value: 45 },
          { name: 'Collier', value: 85 },
          { name: 'Jumeau à biftek', value: 15 },
          { name: 'Paleron', value: 65 },
          { name: 'Macreuse à bifteck', value: 45 },
          { name: 'Gîte', value: 85 },
          { name: 'Aiguillette baronne', value: 65 },
          { name: 'Filet', value: 95 }
        ]
      }
    ]
  };

  return (
    <View>
      <View className="header">这个case，svg上的字出不来（图放大点看）</View>
      <View className="body">
        <Chart option={option} />
      </View>
      <SkiaComponent svg={beef} width={600} height={600} />
    </View>
  );
}
