import React from "react";

type Props = {
  name: string;
<<<<<<< HEAD
  scientificName: string;
=======
>>>>>>> 0482a811ea8f4633e328001e220abcafc93f9786
};

class Tree extends React.Component<Props> {
  render() {
<<<<<<< HEAD
    return (
      <p>
        Name: {this.props.name} scientificName:{this.props.scientificName}
      </p>
    );
=======
    return <p>Name: {this.props.name}</p>;
>>>>>>> 0482a811ea8f4633e328001e220abcafc93f9786
  }
}

export default Tree;
