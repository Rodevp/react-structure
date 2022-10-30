const useRandomColor = () => {

    const  colors = [
        '#eeb8b8',
        '#deb3cf',
        '#b57fb3',
        '#aeddef',
        '#f6b99d',
        '#a3b6c5',
        '#b1d3c5'
    ]

    const numberRandom = Math.floor(  Math.random() * colors.length )

    return colors[numberRandom]

}

export default useRandomColor;