@RestController
public class ApiController {

    @GetMapping("/api/hello")
    public HashMap hello() {
        HashMap result = new HashMap();
        result.put("message", "안녕하세요");

        return result;
    }
}