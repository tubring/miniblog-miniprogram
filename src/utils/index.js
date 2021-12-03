function formateTime(str=''){
    
    let [year,month,date] = str.split('-')

    let months =["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]

    return months[month-1] + ' ' + date +', ' + year;
    
}

export {formateTime}