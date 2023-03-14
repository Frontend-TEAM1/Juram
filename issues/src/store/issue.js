// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createSlice } from '@reduxjs/toolkit';
import { Octokit } from 'octokit';

const initialState = async () => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  });

  const result = await octokit.request(
    'GET /repos/angular/angular-cli/issues',
    {
      owner: 'OWNER',
      repo: 'angular-cli',
      state: 'open',
      per_page: 10,
      page: 1,
    }
  );
};

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  // extraReducers: (builder) => {
  //     // 기능별 함수들
  //     // addcase가 switch문 처럼
  //     builder.addCase(thunk로 만든 함수.status, (state) => {
  //         state.initialState에 있는거 중 변화시킬것
  //     })
  // }
});

// const dd = createAsyncThunk('타입이름. 이 값에 따라 pending fulfilled rejected가 붙은 액션타입이 생김', async (todo액션으로 전달받은 값) => {
//     const res = await axios.post('url주소', todo)
//     return res.data
// })
