import React, { useState } from 'react';
import { StyledForm } from './styles';

function Form({
  children,
  onSubmit,
  initialValues={},
  ...props
}) {

  const [values, setValues] = useState(initialValues);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleOnChange = (e, field) => {
    const newText = e.target.value;

    setValues(state => ({
      ...state,
      [field]: newText,
    }));
  };

  const injectDependencies = (child) => {
    if (typeof child === 'string') return child;

    const newChild = {
      ...child,
      props: {
        ...child.props,
      },
    };

    if (child.props?.children) {
      if (Array.isArray(child.props.children)) {
        newChild.props.children = child.props.children.map(item => injectDependencies(item));
      }
      else {
        newChild.props.children = injectDependencies(child.props.children);
      }
    }

    if (child.props?.type === 'submit') {
      newChild.props = {
        ...child.props,
        onClick: handleOnSubmit,
      };
    }

    if (child.props?.name && child.props?.type) {
      newChild.props = {
        ...child.props,
        value: Object.prototype.hasOwnProperty.call(values, child.props.name) ? values[child.props.name] : '',
        onChange: (e) => handleOnChange(e, child.props.name),
      };
    }

    return newChild;
  };

  const handleChildren = (childrenElements) => {
    return childrenElements.map(child => {
      return injectDependencies(child);
    });
  };

  return (
    <StyledForm {...props}>
      {handleChildren(children)}
    </StyledForm>
  );
}

export default Form;
