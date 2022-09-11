import "./GalleryImageCard.css";
import { useEffect, useRef } from "react";

export default function GalleryImageCard({ i, item }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = event.pageX - this._x;
      this.y = (event.pageY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
  };

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    mouse.setOrigin(containerRef.current);
    containerRef.current.style.zIndex = 100;
    update(event);
  };

  var onMouseLeaveHandler = function () {
    containerRef.current.style.zIndex = i;
    innerRef.current.style = "";
    mouse.setOrigin(containerRef.current);
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / innerRef.current.offsetHeight / 2).toFixed(2),
      (mouse.x / innerRef.current.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    innerRef.current.style.transform = style;
    innerRef.current.style.webkitTransform = style;
    innerRef.current.style.mozTranform = style;
    innerRef.current.style.msTransform = style;
    innerRef.current.style.oTransform = style;
  };

  useEffect(() => {
    mouse.setOrigin(containerRef.current);
    containerRef.current.onmousemove = onMouseMoveHandler;
    containerRef.current.onmouseleave = onMouseLeaveHandler;
    containerRef.current.onmouseenter = onMouseEnterHandler;
  }, []);
  return (
    <div
      ref={containerRef}
      style={{
        marginTop: `${i * 20}px`,
        position: "relative",
        right: `${i * 20}px`,
        zIndex: i,
      }}
      className="gallery-image-container"
    >
      <div className="gallery-image-inner" ref={innerRef}>
        <img src={item} alt={`gallery image ${i}`} />
      </div>
    </div>
  );
}
