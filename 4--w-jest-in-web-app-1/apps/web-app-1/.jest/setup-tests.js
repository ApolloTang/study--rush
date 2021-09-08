// This file will run on each test, after jest is loaded

import '@testing-library/jest-dom/extend-expect';
import mediaQuery from 'css-mediaquery';
import { getMockReactIntl } from '@myscope/util--test-renderer';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

function createMatchMedia(width) {
  return query => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

beforeAll(() => {
  window.matchMedia = createMatchMedia(window.innerWidth);
});

/**
 * Fixes warning: Failed prop type: Material-UI: `image` is undefined.
 */
jest.mock('@myscope/util--hooks', () => {
  const faker = jest.requireActual('faker');
  const { useRef } = jest.requireActual('react');
  const utilHooks = jest.requireActual('@myscope/util--hooks');

  return {
    ...utilHooks,
    useCloudinaryImageUrl: () => ({
      cloudinaryImageUrl: faker.random.image(),
      imageContainerRef: useRef(),
    }),
  };
});

// mock `scrollToElement` to prevent console error.
jest.mock('scroll-to-element');

getMockReactIntl();
