import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

interface InitialType {
  score: number
  isStart: boolean
  stage: number
}

const INITIAL_STATE: InitialType = {
  score: 0,
  isStart: false,
  stage: 1,
}

export const quizScoreSlice = createSlice({
  name: 'quizScore',
  initialState: INITIAL_STATE,
  reducers: {
    setQuizStart: (state: InitialType) => {
      state.isStart = true
    },
    setScoreIncrease: (state: InitialType) => {
      state.score += 10
    },
    setStageIncrease: (state: InitialType) => {
      state.stage += 1
    },
    setQuizReset: (state: InitialType) => {
      state.isStart = false
      state.stage = 1
    },
    setTotalScoreReset: (state: InitialType) => {
      state.score = 0
    },
  },
})

export const { setQuizStart, setScoreIncrease, setStageIncrease, setQuizReset, setTotalScoreReset } =
  quizScoreSlice.actions

export const getScore = (state: RootState): number => state.result.score
export const getIsStart = (state: RootState): boolean => state.result.isStart
export const getStage = (state: RootState): number => state.result.stage

export default quizScoreSlice.reducer
