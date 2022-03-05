// functional component to functional component(passing of data)


import F2 from './f2'
import Class1 from './class1';
function F1()
{
    let name='ram';
    return <div><h1>this is functional components f1</h1>
    <F2 username={name}> </F2>
    <Class1 username={name}> </Class1>
    </div>
}
export default F1;
