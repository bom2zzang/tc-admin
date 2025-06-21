// src/composables/places.js
import { db } from '@/utils/firebase'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'

// 장소 등록
export const addPlace = async (data) => {
  const ref = collection(db, 'places')
  await addDoc(ref, data)
}

// 특정 월의 장소 목록 불러오기
export const getPlacesByMonth = async (monthId) => {
  const q = query(collection(db, 'places'), where('monthId', '==', monthId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}
