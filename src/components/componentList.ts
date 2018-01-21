import Title from './Title/Title';
import List from './List/List';
import Card from './Card/Card';
import Image from './Image/Image';
import Button from './Button/Button';


function componentList(builder) {
return {
    'title': (props) => Title(props, builder),
    'button': (props) => Button(props, builder),
    'card': (props) => Card(props, builder),
    'image': (props) => Image(props, builder),
    'list': (props => List(props, builder))
  }

}
export default  componentList;
