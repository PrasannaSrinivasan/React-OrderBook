import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../store/store';

export default function Workbook() {

    const records = useSelector((state) => state.records);
    const timer = useSelector((state) => state.timer);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(dataActions.updateTimer());
    //     }, 1000);
    // }, [timer]);

    return (
        <div>{timer}</div>
    )
}
