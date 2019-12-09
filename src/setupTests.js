import { createSerializer } from 'enzyme-to-json'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect'

configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer())
