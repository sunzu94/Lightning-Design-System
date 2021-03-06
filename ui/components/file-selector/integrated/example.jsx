// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

const exampleDemoStyles = 'width: 320px; height: 320px';

let IntegratedFileSelector = props => (
  <div
    className={classNames(
      'slds-file-selector slds-file-selector_integrated',
      props.className
    )}
  >
    <div
      className={classNames(
        'slds-file-selector__dropzone slds-file-selector__dropzone_integrated',
        props.drag ? 'slds-has-drag' : null,
        props.dragover ? 'slds-has-drag-over' : null
      )}
      aria-hidden="true"
    >
      <input
        className="slds-file-selector__input slds-assistive-text"
        accept="image/png"
        type="file"
        id="file-upload-input-01"
        disabled={props.dragoverError}
        tabIndex="-1"
      />
      <label
        className="slds-file-selector__body slds-file-selector__body_integrated"
        htmlFor="file-upload-input-01"
      >
        {props.dragoverError ? (
          <SvgIcon
            className="slds-file-selector__body-icon slds-icon slds-icon-text-default"
            sprite="utility"
            symbol="error"
          />
        ) : (
          <SvgIcon
            className="slds-file-selector__body-icon slds-icon slds-icon-text-default"
            sprite="utility"
            symbol="upload"
          />
        )}
        <span className="slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center">
          {props.dragoverError
            ? 'Too many files selected. Attach up to 1 file.'
            : 'Drop Files'}
        </span>
      </label>
    </div>
    {props.children}
  </div>
);

export default [
  {
    id: 'default',
    label: 'Integrated File Selector - Default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <IntegratedFileSelector className="slds-file-selector_integrated">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </IntegratedFileSelector>
    )
  }
]

export let states = [
  {
    id: 'integrated-file-selector-drag',
    label: 'Drag',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <IntegratedFileSelector className="slds-file-selector_integrated" drag>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </IntegratedFileSelector>
    )
  },
  {
    id: 'integrated-file-selector-dragover',
    label: 'Dragover',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <IntegratedFileSelector
        className="slds-file-selector_integrated"
        drag
        dragover
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </IntegratedFileSelector>
    )
  },
  {
    id: 'integrated-file-selector-dragover-error',
    label: 'Dragover with error',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <IntegratedFileSelector
        className="slds-file-selector_integrated"
        drag
        dragoverError
        error
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </IntegratedFileSelector>
    )
  }
];
