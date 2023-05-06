import React, { useRef, useState } from 'react';
import Carousel, {
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import { View, Dimensions, StyleSheet, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = ({ data }) => {
  const { colors } = useTheme();
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  //   const goForward = () => {
  //     carouselRef.current.snapToNext();
  //   };

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={data}
          renderItem={renderItem}
          hasParallaxImages={true}
          autoplay={true}
          loop={true}
          onSnapToItem={(index) => setIndex(index)}
          autoplayInterval={5000}
          autoplayDelay={3000}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={carouselRef}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: colors.primary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
          dotColor={colors.primary}
          inactiveDotColor={colors.border}
        />
      </View>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: 225,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
