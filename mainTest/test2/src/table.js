const Table = ( {data} ) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>username</th>
            <th>action</th>
            <th>action_createad_at</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.action}</td>
              <td>{item.action_createad_at}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    );
  };

export default Table;