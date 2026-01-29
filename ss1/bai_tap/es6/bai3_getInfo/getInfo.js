export const getInfo = (sv) => {
    const {firstName,degree} = sv;

    console.log({
        firstName: firstName ?? 'Quân',
        degree: degree ?? 'NA'
    });
};