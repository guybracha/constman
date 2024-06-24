// created by https://2monkeys.co.il - come learn with us Fullstack !
import { StyleSheet } from 'react-native';
import { colors1,cols,texts,border1, margin1, padding1,posFlex,just } from './bsStylePage2';


//Done:radius border , 
// TODO : shadow , btn , order, justifys, aligns

export const bs = StyleSheet.create({
  row:{flexDirection:"row",flexWrap:"wrap"},
  ...texts,
  ...colors1,
  ...cols,
  ...border1,
  ...margin1,
  ...padding1,
  ...posFlex,
  ...just
})






// created by https://2monkeys.co.il - come learn with us Fullstack !