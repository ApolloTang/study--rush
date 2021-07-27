import React from 'react';
import styled from 'styled-components';
var StyledButton = styled.button.withConfig({
  displayName: "src__StyledButton",
  componentId: "szme9b-0"
})(["background:red;color:#fff;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:300;padding:9px 36px;"]);

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledButton, null, children));
};

export default Button;