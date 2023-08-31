// @ts-nocheck
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Text, Image } from '@tarojs/components';
import surfacePng from '@/assets/iconpark/press.png';
import basicPng from '@/assets/iconpark/iphone.png';
import storagePng from '@/assets/iconpark/cloud-storage.png';
import networkPng from '@/assets/iconpark/loading.png';
import mediaPng from '@/assets/iconpark/play-two.png';
import locationPng from '@/assets/iconpark/local.png';
import canvasPng from '@/assets/iconpark/painted-screen.png';
import openPng from '@/assets/iconpark/api.png';
import devicePng from '@/assets/iconpark/devices.png';
import TabBarApis from '@/components/tabBarApis/tabBarApis';
import NavigationBarApis from '@/components/navigationBarApis/navigationBarApis';

import './index.scss';

const PNGS = {
  surfacePng,
  basicPng,
  storagePng,
  networkPng,
  mediaPng,
  locationPng,
  canvasPng,
  devicePng,
  'open-apiPng': openPng,
};
export default class Index extends Component<never, any> {
  constructor(props: never) {
    super(props);
    this.state = {
      list: [
        {
          id: 'basic',
          name: 'Basic',
          open: false,
          pages: [
            {
              id: 'system',
              name: 'System',
            },
          ],
        },
        {
          id: 'nav',
          name: 'Nav',
          open: false,
          pages: [],
        },
        {
          id: '',
          name: 'None',
          open: false,
          pages: [],
        },
        {
          id: 'surface',
          name: 'surface',
          open: false,
          pages: [
            {
              id: 'interactive',
              name: 'interactive',
            },
            {
              id: 'navigationBar',
              name: 'navigationBar',
            },
            {
              id: 'tabBar',
              name: 'TabBar',
            },
            {
              id: 'background',
              name: 'background',
            },
            {
              id: 'refresh',
              name: 'refresh',
            },
            {
              id: 'scroll',
              name: 'scroll',
            },
            {
              id: 'window',
              name: 'window',
            },
            {
              id: 'keyboard',
              name: 'keyboard',
            },
          ],
        },
        {
          id: 'network',
          name: 'network',
          open: false,
          pages: [
            {
              id: 'request',
              name: 'request',
            },
          ],
        },
        {
          id: 'storage',
          name: 'storage',
          open: false,
          pages: [
            {
              id: 'index',
              name: 'Storage',
            },
          ],
        },
        {
          id: 'Media',
          name: 'Media',
          open: false,
          pages: [
            {
              id: 'image',
              name: 'Image',
            },
            {
              id: 'Video',
              name: 'Video',
            },
            {
              id: 'camera',
              name: 'Camera',
            },
          ],
        },
        {
          id: 'location',
          name: 'location',
          open: false,
          pages: [
            {
              id: 'index',
              name: 'Location',
            },
          ],
        },
        {
          id: 'open-api',
          name: 'open-api',
          open: false,
          pages: [
            {
              id: 'settings',
              name: 'settings',
            },
          ],
        },
        {
          id: 'device',
          name: 'device',
          open: false,
          pages: [
            {
              id: 'network',
              name: 'network',
            },
            {
              id: 'screen',
              name: 'screen',
            },
            {
              id: 'phone',
              name: 'phone',
            },
            {
              id: 'accelerometer',
              name: 'accelerometer',
            },
            {
              id: 'deviceMotion',
              name: 'deviceMotion',
            },
            {
              id: 'gyroscope',
              name: 'gyroscope',
            },
            {
              id: 'scanCode',
              name: 'scanCode',
            },
            {
              id: 'vibrate',
              name: 'vibrate',
            },
          ],
        },
      ],
    };
  }

  kindToggle = (id: string) => () => {
    const list = this.state.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setState({
      list: list,
    });
  };

  goToComponent = (page: { url: string }) => {
    Taro.navigateTo({
      url: page.url,
    });
  };

  render() {
    const { list = [] } = this.state;
    return (
      <View className="index">
        <View className="index-hd">
          <View className="index-desc">
            <Text className="index-desc_text">APIs Page</Text>
          </View>
        </View>
        <View className="index-bd">
          <View className="kind-list">
            {list
              .map((item) => {
                item.hdClass =
                  'kind-list-item-hd ' +
                  (item.open ? 'kind-list-item-hd-show' : '');
                item.bdClass =
                  'kind-list-item-bd ' +
                  (item.open ? 'kind-list-item-bd-show' : '');
                item.boxClass =
                  'navigator-box ' + (item.open ? 'navigator-box-show' : '');
                item.imgSrc = !!PNGS[`${item.id}Png`]
                  ? PNGS[`${item.id}Png`]
                  : '';
                item._pages = item.pages.map((page) => {
                  return {
                    pageName: page.name,
                    page: page.id,
                    url: `/pages/apis/pages/${item.id}/${page.id}/index`,
                  };
                });
                return item;
              })
              .map((item, index) => {
                if (item._pages.length == 0) {
                  return null;
                }
                return (
                  <View className="kind-list-item" key={index}>
                    <View
                      className={item.hdClass}
                      onClick={this.kindToggle(item.id)}
                    >
                      <View className="kind-list-text">
                        <Text>{item.name}</Text>
                      </View>
                      {!!item.imgSrc && (
                        <Image className="kind-list-img" src={item.imgSrc} />
                      )}
                    </View>
                    <View className={item.bdClass}>
                      <View className={item.boxClass}>
                        {item._pages.map((page, idx) => {
                          return (
                            <View
                              onClick={this.goToComponent.bind(this, page)}
                              key={idx}
                              className="navigator"
                            >
                              <Text className="navigator-text">
                                {page.pageName}
                              </Text>
                              <View className="navigator-arrow" />
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <TabBarApis />
        <NavigationBarApis />
      </View>
    );
  }
}
