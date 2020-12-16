import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Success!', 'Updated profile.');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Failed to update the profile!', 'Please check the fields.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
