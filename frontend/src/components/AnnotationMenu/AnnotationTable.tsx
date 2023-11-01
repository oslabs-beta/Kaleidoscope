import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnotations } from '../../features/annotation/annotationSlice';
import { RootState } from '../../app/store';
import { Annotation } from '../../types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
  
  export default function AnnotationTable() {

    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const annotations = useSelector((state: RootState) => state.annotations)
    // Fetch annotations when component mounts
    useEffect(() => {
        dispatch(fetchAnnotations());
    }, [dispatch]);
    
    console.log('annotations', annotations)

    return (
      <ul role="list" className="divide-y divide-gray-100">
        {annotations.list.map((annotation) => (
          <li key={annotation.nodeMapId} className="py-4">
            <div className="flex items-center gap-x-3">
              {/* <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" /> */}
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{annotation.annotationName}</h3>
              <time className="flex-none text-xs text-gray-500">
                {annotation.annotationDate}
              </time>
            </div>
            <p className="mt-3 truncate text-sm text-gray-500">
            <span className="text-gray-700">{annotation.annotationBody}</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }