# Для корректной работы приложения необходимо установить слеедующие компоненты:

## Для test2:

1) npm;
2) axios;
3) react;

## Для api:

1) npm;
2) express;
3) cors;

# Для запуска приложения необходимо:

1) В папке api запустить в терминале node index.js
2) В папке test2 запустить втерминале npm start

# Структура используемых файлов:

## App.js(Компонент App)

1) Мы используем 2 хука useState, для query и data. Query отвечает за содержимое импута в процессе фильтрации. В data передаются объекты которые надо отобразить в таблице.
```
const [query, setQuery] = useState('');
const [data, setData] = useState([]);
```

2) Используется хук useEffect для получения элементов которых надо отобразить в таблице.
```
useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5500?q=${query}`);
      setData(res.data);
    };
    fetchUsers()
  }, [query]); 
```

3) Компонент App возвращает с div с input и table в которую заносятся интересующие нас сведения, которые нужно отфильровать.
```
return (
    <div className='app'>
      <input
        placeholder='Search...'
        className='search'
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
     {<Table data={data} />}
    </div>
  )
```

## index.js(API)

В данном файле задаются необходимые ключи, а также с помощью метода перебора filter массива data, формируется новый необходимый нам массив, прошедший выполнение функции. При этом учтено то, что если в файле с пользователями будет большое количество объектов, отображатся будут только первые, но в процессе фильтрации они будут переотрисовываться на те которые нужны.
```
app.get("/", (req, res) => { 
    const q = req.query.q;

    const keys = ['username', 'action', 'action_createad_at']

    const search = (data) => {
        return data.filter(
        (item) => 
            keys.some(key => item[key].toLowerCase().includes(q))
        )
    }

    res.json(search(Users).splice(0, 10)); 
});
```
## table.js(Компонент Table)
Содержит компонент Table, формирующий конструкцию нашей таблицы.

## users.js 
Массив с объектами пользователей.
