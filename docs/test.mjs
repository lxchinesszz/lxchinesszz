function check() {
    let rowArr = WfForm.getDetailAllRowIndexStr("detail_1").split(",");
    // 首付款原币金额
    let fieldId = WfForm.convertFieldNameToId("sfkje", "detail_1");
    // 首付款比例
    let radioFieldId = WfForm.convertFieldNameToId("sfkbl", "detail_1");
    for (let i = 0; i < rowArr.length; i++) {
        let rowIndex = rowArr[i];
        if (rowIndex !== "") {
            // 首付款原币金额
            let fieldMark = `${fieldId}_${rowIndex}`;
            let ybjeAmount = WfForm.getFieldValue(fieldMark);
            // 付款比例
            let fieldRadioMark = `${radioFieldId}_${rowIndex}`;
            let radio = WfForm.getFieldValue(fieldRadioMark);
            console.log(`付款金额:${ybjeAmount},付款比例:${radio}`)
        }
    }
}
