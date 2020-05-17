import React from "react";

type Props = {};

type State = {
  trees: Array<{
    name: string;
    scientificName: string;
  }>;
};

class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      { name: "White birch", scientificName: "Betula pendula" },
      { name: "Weeping willow", scientificName: "Salix sepulcralis" },
      { name: "London planetree", scientificName: "Platanus hybryda" },
    ],

    name: "",
    scientificName: "",
  };

  //the addTree method
  addTree = () => {
    console.log("adding trees?!?");
    this.setState({
      trees: [
        this.setState({
          trees: [
            ...this.state,
            {
              name: this.state.name,
              scientificName: this.state.scientificName,
            },
          ],
        }),
      ],
    });
  };

  render() {
    return (
      <div>
        {
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addTree();
            }}
            style={{ display: "flex" }}
          >
            <p style={{ margin: ".25rem" }}>
              <label>
                Common name:{" "}
                <input
                  type="text"
                  value={this.state.commonName}
                  onChange={(e) =>
                    this.setState({ commonName: e.target.value })
                  }
                />
              </label>
            </p>
            <p style={{ margin: ".25rem" }}>
              <label>
                Scientific name:{" "}
                <input
                  type="text"
                  value={this.state.scientificName}
                  onChange={(e) =>
                    this.setState({ scientificName: e.target.value })
                  }
                />
              </label>
            </p>
            <p style={{ margin: ".25rem" }}>
              <button type="submit">Add!</button>
            </p>
          </form>
        }
      </div>
    );
  }
}

export default PopularTrees;
