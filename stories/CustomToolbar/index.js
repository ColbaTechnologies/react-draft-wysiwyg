/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichUtils } from 'draft-js';
import { Editor } from '../../src';

import './styles.css';

class CustomOption extends Component {
    static propTypes = {
      onChange: PropTypes.func,
      editorState: PropTypes.object,
    };

    toggleBold: Function = (): void => {
      const { editorState, onChange } = this.props;
      const newState = RichUtils.toggleInlineStyle(
        editorState,
        'BOLD',
      );
      if (newState) {
        onChange(newState);
      }
    };

    render() {
      return (
        <div className="rdw-storybook-custom-option" onClick={this.toggleBold}>B</div>
      );
    }
}

const CustomToolbar = () =>
  (<div className="rdw-storybook-root">
    <h3>Last option marked as B is custom option for making test BOLD.</h3>
    <Editor
      toolbarClassName="rdw-storybook-toolbar"
      wrapperClassName="rdw-storybook-wrapper"
      editorClassName="rdw-storybook-editor"
      toolbarCustomButtons={[<CustomOption />]}
      toolbar={{
                colorPicker: {
                    icon: 'colorPicker',
                    inDropdown: false,
                    options: ['highlight'],
                    type: 'raw',
                },
                inline: {
                    bold: { icon: 'as', className: undefined, type: 'raw' },
                    className: 'editorOptionsBlock',
                    inDropdown: false,
                    italic: { icon: 'italic', className: undefined, type: 'raw' },
                    options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
                    strikethrough: { icon: 'strikethrough', className: undefined, type: 'raw' },
                    subscript: { icon: 'subscript', className: undefined, type: 'raw' },
                    superscript: { icon: 'superscript', className: undefined, type: 'raw' },
                    underline: { icon: 'underline', className: undefined, type: 'raw' },
                },
                textAlign: {
                    center: { icon: 'eraser', className: undefined, type: 'raw' },
                    justify: { icon: 'eraser', className: undefined, type: 'raw' },
                    left: { icon: 'eraser', className: undefined, type: 'raw' },
                    right: { icon: 'eraser', className: undefined, type: 'raw' },
                },

                options: ['inline', 'remove', 'fontSize', 'textAlign', 'colorPicker'],
                remove: { icon: 'eraser', className: undefined, type: 'raw' },
            }}
    />
   </div>);

export default CustomToolbar;
