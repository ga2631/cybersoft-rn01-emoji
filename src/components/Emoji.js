import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';

import emoji1 from '../assets/emoji/e1.png';
import emoji2 from '../assets/emoji/e2.png';
import emoji3 from '../assets/emoji/e3.png';
import emoji4 from '../assets/emoji/e4.png';
import emoji5 from '../assets/emoji/e5.png';

const emoji = [
  {
    name: 'emoji-1',
    image: emoji1,
  },
  {
    name: 'emoji-2',
    image: emoji2,
  },
  {
    name: 'emoji-3',
    image: emoji3,
  },
  {
    name: 'emoji-4',
    image: emoji4,
  },
  {
    name: 'emoji-5',
    image: emoji5,
  },
];

export default class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectEmoji: emoji[0],
    };
  }

  render() {
    console.log(this.state.selectEmoji);
    return (
      <Grid>
        <Row>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={this.state.selectEmoji.image} />
          </Col>
        </Row>
        <Row>
          {emoji.map((item, index) => (
            <Col key={index} style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this._changeIcon(item.name)}>
                <Image
                  source={item.image}
                  style={{maxWidth: 50, maxHeight: 50}}
                />
              </TouchableOpacity>
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }

  _changeIcon = name => {
    this.setState({selectEmoji: emoji.find(item => item.name === name)});
  };
}
