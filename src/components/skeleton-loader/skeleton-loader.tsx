import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "skeleton-loader",
  styleUrl: "skeleton-loader.css",
  shadow: false
})
export class MyComponent {
  @Prop() width: string = "150px";
  @Prop() height: string = "100%";
  @Prop() widthRandomness: number = 0.25;
  @Prop() heightRandomness: number = 0;
  @Prop() borderRadius: string = "8px";
  @Prop() color: string = "#EFF1F6";
  @Prop() count: number = 1;
  @Prop() animated: boolean = true;

  private preProcess() {
    const _w = parseFloat(this.width);
    const _h = parseFloat(this.height);
    const wm = this.width.toString().replace(/\d+/g, "");
    const hm = this.height.toString().replace(/\d+/g, "");
    const elements = [];
    for (let i = 0; i < this.count; i++) {
      const width = `${_w - Math.random() * _w * this.widthRandomness}${wm}`;
      const height = `${_h - Math.random() * _h * this.heightRandomness}${hm}`;
      elements.push(
        <span
          class={`react-skeleton-load ${this.animated ? "animated" : ""}`}
          key={i}
          style={{
            width,
            height,
            borderRadius: this.borderRadius,
            backgroundColor: this.color
          }}
        >
          &zwnj;
        </span>
      );
      if (i !== this.count - 1) {
        elements.push(<br key={`br-${i}`} />);
      }
    }
    return elements;
  }

  render() {
    return <span>{this.preProcess()}</span>;
  }
}
