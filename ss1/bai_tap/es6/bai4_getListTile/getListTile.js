export const getListTitle = (courses,n) => {
    let listTitle = [];

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].rating >= n) {
            listTitle = [...listTitle, courses[i].title];
        }
    }

    return listTitle;
};