export const getDetail = (courses,n) => {
    let listTitle = [];

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].rating < n) {
            let detail = courses[i].id + ' - ' + courses[i].title + ' - ' + courses[i].rating;
            listTitle = [...listTitle,detail];
        }
    }

    return listTitle;
};