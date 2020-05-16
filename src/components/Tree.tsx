import React from "react";

type Props = {
  name: string;
  scientificName: string;
};

class Tree extends React.Component<Props> {
  render() {
    return (
      <p>
        Name: {this.props.name} scientificName:{this.props.scientificName}
      </p>
    );
  }
}

export default Tree;
