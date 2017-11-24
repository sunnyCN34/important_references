import React from 'react';
import { shallow } from 'enzyme';
import {
  overlayCss,
  initPreview
} from '../src/redesign/player-editor/overview/preview-css';

describe('test', () => {
  let player;
  let iframe;
  let refresh;
  const getConfigProperty = path => {
    if (path === '$.dock') {
      return false;
    } else if (path === '$.repeat') {
      return true;
    } else if (path === '$.autoadvance') {
      return true;
    } else if (path === '$.autoplay') {
      return true;
    }
  };

  beforeEach(() => {
    player = {
      preview: {
        getConfigProperty
      },
      plugins: {
        overlay: {
          getViewState: () => {
            return {};
          }
        },
        playlist: {
          getViewState: () => {
            return {};
          }
        }
      },
      playlist: {
        getViewState: () => {
          return {};
        }
      }
    };

    initPreview(player, iframe, refresh);
  });

  