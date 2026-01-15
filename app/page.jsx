"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await fetch("/api/jobs");
    const data = await result.json();
    console.log("data", data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="content-page">
      <p>
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn.
        Cuộc sống hiện đại mang đến nhiều cơ hội nhưng cũng kéo theo không ít
        thách thức khiến con người dễ rơi vào trạng thái căng thẳng và mệt mỏi.
        Vì vậy, mỗi người cần biết cách cân bằng giữa công việc và thời gian
        nghỉ ngơi để giữ gìn sức khỏe tinh thần lẫn thể chất. Một thói quen nhỏ
        như dành vài phút mỗi ngày để thư giãn, đọc sách, tập thể dục hoặc đơn
        giản là hít thở sâu cũng có thể tạo ra sự thay đổi tích cực. Khi tâm trí
        thoải mái, chúng ta sẽ dễ dàng vượt qua khó khăn và sống trọn vẹn hơn. v
      </p>
    </div>
  );
}
