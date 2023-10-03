import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const CurvedTabBar = ({state, descriptors, navigation}) => {
  const {routes} = state;

  const tabBarHeight = 60;
  const curveWidth = 120;

  const tabBarX = routeIndex => {
    return (curveWidth / (routes.length - 1)) * routeIndex;
  };

  const tabBarCurve = `
    M0 0
    H${tabBarX(1)}
    Q${tabBarX(1) + curveWidth / 2} ${tabBarHeight} ${tabBarX(
    2,
  )} ${tabBarHeight}
    H${tabBarX(3)}
    L${tabBarX(3)} 0
    L0 0
  `;

  return (
    <View style={{position: 'relative', overflow: 'visible'}}>
      <Svg
        height={tabBarHeight}
        width="100%"
        style={{position: 'absolute', bottom: 0}}>
        <Path d={tabBarCurve} fill="#ffffff" />
      </Svg>
      <View style={{flexDirection: 'row', height: tabBarHeight}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel || route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {/* Your Tab Icon or Label */}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CurvedTabBar;
