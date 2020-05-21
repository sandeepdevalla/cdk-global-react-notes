import React from 'react';
import { StaticRouter } from 'react-router-dom'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { mount } from 'enzyme'


import Tasks, {TaskList} from './Tasks';

describe('<Tasks>', () => {
    let httpMock

    beforeEach(() => {
      httpMock = new AxiosMockAdapter(axios)
      httpMock.onGet('/talks').reply(200, [
        "test data"
      ])
    })
    const renderProposalListPage = () => mount(
        <StaticRouter context={{}}>
          <Tasks/>
        </StaticRouter>
      )
    test('renders <TaskList> after receiving response from API', async () => {
        // given
        httpMock.onGet('/talks').reply(200, [
          "test content",
        ])
        // when
        const tree = renderProposalListPage()
    
        // then
        expect(tree.find(TaskList)).toExist()
      })
})
